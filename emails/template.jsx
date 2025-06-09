import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  // Dummy data for preview
  const PREVIEW_DATA = {
    monthlyReport: {
      userName: "Vynfi",
      type: "monthly-report",
      data: {
        month: "December",
        stats: {
          totalIncome: 5000,
          totalExpenses: 3500,
          byCategory: {
            housing: 1500,
            groceries: 600,
            transportation: 400,
            entertainment: 300,
            utilities: 700,
          },
        },
        insights: [
          "Your housing expenses are 43% of your total spending - consider reviewing your housing costs.",
          "Great job keeping entertainment expenses under control this month!",
          "Setting up automatic savings could help you save 20% more of your income.",
        ],
      },
    },
    budgetAlert: {
      userName: "Vynfi",
      type: "budget-alert",
      data: {
        percentageUsed: 85,
        budgetAmount: 4000,
        totalExpenses: 3400,
      },
    },
  };
  
  export default function EmailTemplate({
    userName = "",
    type = "monthly-report",
    data = {},
  }) {
    if (type === "monthly-report") {
      return (
        <Html>
          <Head />
          <Preview>Your Monthly Financial Report</Preview>
          <Body style={styles.body}>
            <Container style={styles.container}>
              <Heading style={styles.title}>Monthly Financial Report</Heading>
  
              <Text style={styles.text}>Hello {userName},</Text>
              <Text style={styles.text}>
                Here&rsquo;s your financial summary for {data?.month}:
              </Text>
  
              {/* Main Stats */}
              <Section style={styles.statsContainer}>
                <div style={styles.stat}>
                  <Text style={styles.text}>Total Income</Text>
                  <Text style={styles.heading}>${data?.stats.totalIncome}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Total Expenses</Text>
                  <Text style={styles.heading}>${data?.stats.totalExpenses}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Net</Text>
                  <Text style={styles.heading}>
                    ${data?.stats.totalIncome - data?.stats.totalExpenses}
                  </Text>
                </div>
              </Section>
  
              {/* Category Breakdown */}
              {data?.stats?.byCategory && (
                <Section style={styles.section}>
                  <Heading style={styles.heading}>Expenses by Category</Heading>
                  {Object.entries(data?.stats.byCategory).map(
                    ([category, amount]) => (
                      <div key={category} style={styles.row}>
                        <Text style={styles.text}>{category}</Text>
                        <Text style={styles.text}>${amount}</Text>
                      </div>
                    )
                  )}
                </Section>
              )}
  
              {/* AI Insights */}
              {data?.insights && (
                <Section style={styles.section}>
                  <Heading style={styles.heading}>Vynfi Insights</Heading>
                  {data.insights.map((insight, index) => (
                    <Text key={index} style={styles.text}>
                      • {insight}
                    </Text>
                  ))}
                </Section>
              )}
  
              <Text style={styles.footer}>
                Thank you for using Vynfi. Keep tracking your finances for better
                financial health!
              </Text>
            </Container>
          </Body>
        </Html>
      );
    }
  
    if (type === "budget-alert") {
      return (
        <Html>
          <Head />
          <Preview>Budget Alert</Preview>
          <Body style={styles.body}>
            <Container style={styles.container}>
              <Heading style={styles.title}>Budget Alert</Heading>
              <Text style={styles.text}>Hello {userName},</Text>
              <Text style={styles.text}>
                You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
                monthly budget.
              </Text>
              <Section style={styles.statsContainer}>
                <div style={styles.stat}>
                  <Text style={styles.text}>Budget Amount</Text>
                  <Text style={styles.heading}>${data?.budgetAmount}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Spent So Far</Text>
                  <Text style={styles.heading}>${data?.totalExpenses}</Text>
                </div>
                <div style={styles.stat}>
                  <Text style={styles.text}>Remaining</Text>
                  <Text style={styles.heading}>
                    ${data?.budgetAmount - data?.totalExpenses}
                  </Text>
                </div>
              </Section>
            </Container>
          </Body>
        </Html>
      );
    }
  }
  const styles = {
    body: {
      backgroundColor: "#f0f4f8", // slightly brighter background
      fontFamily: "-apple-system, sans-serif",
    },
    container: {
      backgroundColor: "#ffffff",
      margin: "0 auto",
      padding: "32px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)", // softer elevation
      maxWidth: "640px", // ensures good readability
    },
    title: {
      color: "#1e3a8a", // deep blue for brand-like feel
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 0 24px",
      borderBottom: "2px solid #c7d2fe",
      paddingBottom: "8px",
    },
    heading: {
      color: "#111827",
      fontSize: "20px",
      fontWeight: "600",
      margin: "0 0 16px",
    },
    text: {
      color: "#374151", // clean, modern neutral tone
      fontSize: "16px",
      margin: "0 0 16px",
      lineHeight: "1.6",
    },
    section: {
      marginTop: "32px",
      padding: "24px",
      backgroundColor: "#f9fafb", // soft light gray
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    },
    statsContainer: {
      margin: "32px 0",
      padding: "20px",
      backgroundColor: "#eff6ff", // light blue highlight for financial info
      borderRadius: "8px",
      border: "1px solid #bfdbfe",
    },
    stat: {
      marginBottom: "16px",
      padding: "14px",
      backgroundColor: "#ffffff",
      borderLeft: "4px solid #3b82f6", // vibrant blue accent
      borderRadius: "6px",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)",
      color: "#1e40af",
      fontWeight: "600",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px dashed #d1d5db", // subtler line for a cleaner look
      fontSize: "15px",
      color: "#374151", // professional gray-blue tone
      fontWeight: "500", // more readable and visually balanced
    },
    footer: {
      color: "#6b7280",
      fontSize: "13px",
      textAlign: "center",
      marginTop: "32px",
      paddingTop: "16px",
      borderTop: "1px solid #d1d5db",
    },
  };
  