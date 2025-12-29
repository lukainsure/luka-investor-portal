import { TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';

const FinancialsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'Global Insurtech Market',
      value: '$7.1T',
      detail: 'Total addressable market',
    },
    {
      icon: Users,
      label: 'Digital-First Customers',
      value: '68%',
      detail: 'Prefer online insurance',
    },
    {
      icon: BarChart3,
      label: 'Market Growth',
      value: '15%',
      detail: 'Annual CAGR projected',
    },
  ];

  const projections = [
    { year: 'Year 1', policies: '5,000', revenue: '$2.5M', margin: '-40%' },
    { year: 'Year 2', policies: '25,000', revenue: '$15M', margin: '5%' },
    { year: 'Year 3', policies: '100,000', revenue: '$65M', margin: '25%' },
  ];

  const useOfFunds = [
    { category: 'Technology & AI Development', percentage: 45 },
    { category: 'Regulatory & Licensing', percentage: 20 },
    { category: 'Go-to-Market & Partnerships', percentage: 20 },
    { category: 'Operations & Team', percentage: 15 },
  ];

  return (
    <section id="financials" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Market & Financials
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              The <span className="text-gradient font-normal">opportunity</span> in numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A massive market ripe for disruption, with a capital-efficient model 
              designed for rapid, sustainable growth.
            </p>
          </div>

          {/* Market Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-light text-primary mb-2">{metric.value}</div>
                <div className="text-sm font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.detail}</div>
              </div>
            ))}
          </div>

          {/* 3-Year Projections */}
          <div className="p-8 rounded-2xl bg-card border border-border mb-16">
            <h3 className="text-xl font-medium mb-8 text-center">3-Year Growth Trajectory</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Period</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Policies</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Revenue</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((row, index) => (
                    <tr key={row.year} className={index !== projections.length - 1 ? 'border-b border-border/50' : ''}>
                      <td className="py-4 px-4 font-medium">{row.year}</td>
                      <td className="py-4 px-4 text-right text-muted-foreground">{row.policies}</td>
                      <td className="py-4 px-4 text-right text-primary font-medium">{row.revenue}</td>
                      <td className={`py-4 px-4 text-right font-medium ${row.margin.startsWith('-') ? 'text-destructive' : 'text-green-500'}`}>
                        {row.margin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              * Projections are illustrative and based on internal modelling. Actual results may vary.
            </p>
          </div>

          {/* Use of Funds */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium">Use of Funds</h3>
                <p className="text-sm text-muted-foreground">How investment capital drives growth</p>
              </div>
            </div>
            <div className="space-y-4">
              {useOfFunds.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">{item.category}</span>
                    <span className="text-sm text-primary font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;
