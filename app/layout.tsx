export const metadata = {\n  title: "Ideas from: Voice-to-Code Generator",\n  description: "[
  {
    title: AI-Powered Voice-to-Code Generator Solution,
    one_liner: Revolutionary AI solution based on Voice-to-Code Generator,
    execution_72h: {
      mvp_scope: [
        Landing page,
        Core AI feature,
        Payment integration
      ],
      tools: [
        Next.js,
        Supabase,
        Stripe
      ]
    }
  }
]",\n};\n\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );\n}