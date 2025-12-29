import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Car, FileWarning, Bot, User, RotateCcw } from 'lucide-react';
import conversationsData from '@/data/conversations.json';

interface Message {
  role: 'user' | 'agent';
  content: string;
  delay: number;
}

interface Conversation {
  title: string;
  messages: Message[];
}

type ConversationKey = 'insureVehicle' | 'lodgeClaim';

const conversations = conversationsData as Record<ConversationKey, Conversation>;

const ChatDemo = () => {
  const [activeScenario, setActiveScenario] = useState<ConversationKey>('insureVehicle');
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages, isTyping]);

  const startConversation = () => {
    setDisplayedMessages([]);
    setIsComplete(false);
    setIsTyping(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const messages = conversations[activeScenario].messages;
    let currentIndex = 0;
    let cumulativeDelay = 500;

    const showNextMessage = () => {
      if (currentIndex >= messages.length) {
        setIsComplete(true);
        setIsTyping(false);
        return;
      }

      const message = messages[currentIndex];
      
      // Show typing indicator for agent messages
      if (message.role === 'agent') {
        setIsTyping(true);
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
          setDisplayedMessages(prev => [...prev, message]);
          currentIndex++;
          cumulativeDelay = message.delay || 1500;
          timeoutRef.current = setTimeout(showNextMessage, cumulativeDelay);
        }, 1000 + Math.random() * 500);
      } else {
        setDisplayedMessages(prev => [...prev, message]);
        currentIndex++;
        cumulativeDelay = message.delay || 1500;
        timeoutRef.current = setTimeout(showNextMessage, cumulativeDelay);
      }
    };

    timeoutRef.current = setTimeout(showNextMessage, 500);
  };

  useEffect(() => {
    startConversation();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeScenario]);

  const handleScenarioChange = (scenario: ConversationKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveScenario(scenario);
  };

  const handleRestart = () => {
    startConversation();
  };

  return (
    <section id="demo" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Product Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              See <span className="text-gradient font-normal">Luca</span> in action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how our AI agent handles real customer scenarios — 
              from getting a quote to settling a claim in minutes.
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant={activeScenario === 'insureVehicle' ? 'default' : 'outline'}
              size="lg"
              onClick={() => handleScenarioChange('insureVehicle')}
              className="gap-3"
            >
              <Car className="w-5 h-5" />
              Insure a Vehicle
            </Button>
            <Button
              variant={activeScenario === 'lodgeClaim' ? 'default' : 'outline'}
              size="lg"
              onClick={() => handleScenarioChange('lodgeClaim')}
              className="gap-3"
            >
              <FileWarning className="w-5 h-5" />
              Lodge a Claim
            </Button>
          </div>

          {/* Chat Interface */}
          <div className="bg-background rounded-2xl border border-border overflow-hidden card-shadow">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Luca</div>
                  <div className="text-xs text-muted-foreground">AI Insurance Agent</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {displayedMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.role === 'user'
                        ? 'bg-secondary'
                        : 'bg-primary'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-4 h-4 text-foreground" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-secondary text-foreground rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary px-4 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Footer */}
            <div className="px-6 py-4 border-t border-border bg-secondary/30">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {isComplete ? 'Demo complete' : 'Demo in progress...'}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRestart}
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Restart
                </Button>
              </div>
            </div>
          </div>

          {/* Demo Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            This is a scripted demonstration. The actual product will use real AI for dynamic conversations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
