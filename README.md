# 💸 Vynfi AI – Your Smart Finance Partner

**Vynfi AI** is an intelligent personal finance management system designed to simplify and automate your budgeting, spending analysis, and financial decision-making. Built with a modern tech stack and powered by AI, Vynfi helps users gain insights into their financial habits and stay financially healthy.



## 🚀 Features

- 🔐 Secure User Authentication with Clerk
- 🧠 AI-Powered Expense Categorization using Gemini AI
- 📊 Real-Time Budgeting and Spending Insights
- ✉️ Monthly Financial Reports via Email
- 📉 Visual Analytics with Charts and Graphs
- 🛡️ Bot Protection and Rate Limiting via Arcjet
- ⚙️ Scalable Event-Driven Architecture with Inngest
- 🗃️ Prisma-based PostgreSQL Integration for Reliable Data Storage

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| **Next.js** | React-based full-stack framework |
| **Tailwind CSS** | Rapid UI development |
| **Gemini AI (Google)** | AI expense analysis & insights |
| **Prisma** | ORM for PostgreSQL |
| **Shadcn UI** | Accessible and modern UI components |
| **Clerk** | User authentication & session management |
| **Arcjet** | Bot protection, rate limiting, and email validation |
| **Inngest** | Event-driven workflows for async operations |

## 📂 Project Structure
/app → Main app logic (Next.js Pages/Routes)
/components → Reusable UI components (Shadcn UI)
/lib → Utility functions, DB logic
/public → Static assets
/styles → Global Tailwind styles

## 📈 AI & Analytics

- Uses **Gemini AI** to provide category-level insights.
- Monthly reports generated and emailed using Inngest workflows.
- Budget alerts triggered based on smart thresholds.

## 🧪 Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/vynfi-ai.git
cd vynfi-ai
```
2. **Install npm**
```
npm install
```
3. **Configure environment variables**
```
DATABASE_URL=your_postgres_url
CLERK_SECRET_KEY=your_clerk_secret
ARCJET_API_KEY=your_arcjet_key
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
```
4. **Run the app**
```
npm run dev
```

# 📝 Future Scope
📱 Mobile version using Expo + React Native

🪙 Global currency spending insights

🤖 Personalized financial assistant chatbot



# 🧑‍💻 Author
Vinayak Porje
📧 vinayakporje642@gmail.com
