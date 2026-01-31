import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, User, RotateCcw, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'agent';
  content: string;
}

const FASTAPI_URL = 'https://esvedlub77lghljsymyov3dn6y0svmnr.lambda-url.af-south-1.on.aws/chat';

const ChatDemo = () => {
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [sessionId, setSessionId] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages, isTyping]);

  useEffect(() => {
    // Focus input when agent finishes responding
    if (!isTyping) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [isTyping]);

  useEffect(() => {
    startConversation();
    // Scroll to the demo section header on load
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const generateSessionId = () => {
    return 'session_' + Math.random().toString(36).substr(2, 9);
  };

  const startConversation = () => {
    setDisplayedMessages([]);
    setIsTyping(false);
    setSessionId(generateSessionId());

    // Initial greeting
    const initialMessage: Message = {
      role: 'agent',
      content: "Hi there! 👋 I'm Luka, your personal broker in your pocket.  Let's get your cellphone insured!"
    };

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setDisplayedMessages([initialMessage]);
    }, 1000);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const messageText = inputMessage.trim();
    const newUserMessage: Message = {
      role: 'user',
      content: messageText
    };

    setDisplayedMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // FastAPI Call
    console.log('Attempting to connect to backend at:', FASTAPI_URL);
    console.log('Using session ID:', sessionId);

    // Only include messages before the current one for history
    const messageHistory = displayedMessages.map(msg => ({
      text: msg.content,
      sender: msg.role === 'user' ? 'user' : 'agent'
    }));

    try {
      const response = await fetch(FASTAPI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          message: messageText,
          session_id: sessionId,
          history: messageHistory.map(msg => ({
            text: msg.text,
            sender: msg.sender === 'user' ? 'user' : 'assistant'
          }))
        }),
      });

      if (!response.ok) {
        console.error('Backend response not ok:', {
          status: response.status,
          statusText: response.statusText
        });
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const agentResponse = data.response;

      const botMessage: Message = {
        role: 'agent',
        content: agentResponse || "I'm sorry, I'm having trouble connecting right now. Please try again later."
      };

      setDisplayedMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to send chat message:", error);
      const errorMessage: Message = {
        role: 'agent',
        content: `Connection error: ${error.message}. Please ensure the backend is running.`
      };
      setDisplayedMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleRestart = () => {
    startConversation();
  };

  return (
    <section ref={sectionRef} id="demo" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Product Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              See <span className="text-gradient font-normal">Luka</span> in action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how our AI agent handles real customer scenarios —
              insuring your phone instantly.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden card-shadow">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Luka</div>
                  <div className="text-xs text-muted-foreground">AI Insurance Agent</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="h-[400px] md:h-[500px] overflow-y-auto p-6 space-y-4 overscroll-contain touch-pan-y"
            >
              {displayedMessages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50">
                  <Bot className="w-12 h-12 mb-4" />
                  <p>Initializing chat...</p>
                </div>
              )}
              {displayedMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in ${message.role === 'user' ? 'flex-row-reverse' : ''
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.role === 'user'
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
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-sm'
                      : 'bg-secondary text-foreground rounded-tl-sm'
                      }`}
                  >
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
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
            </div>

            {/* Chat Footer with Input */}
            <div className="px-6 py-4 border-t border-border bg-secondary/30">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  ref={inputRef}
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isTyping || !inputMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleRestart}
                  title="Restart Demo"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Demo Note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            This is an interactive demonstration connected to a live AI agent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
