// OpenAI API integration for chatbot
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const sendMessageToOpenAI = async (
  message,
  conversationHistory = []
) => {
  if (!OPENAI_API_KEY) {
    throw new Error(
      "OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file."
    );
  }

  try {
    // Prepare the conversation context
    const systemMessage = {
      role: "system",
      content: `You are a helpful AI assistant for InnovativeTech Solutions, a technology company that provides:
      - Web Development (responsive websites, e-commerce platforms, custom web applications)
      - Programming (custom software, mobile apps, desktop applications)
      - Digital Marketing (campaigns, social media, content marketing, brand strategy)
      - SEO (search engine optimization, website ranking, content optimization)
      
      IMPORTANT CONVERSATION FLOW:
      1. FIRST: Ask 1-2 discovery questions to understand their needs
      2. ONCE THEY'VE DESCRIBED THEIR PROJECT: Stop asking questions and start providing solutions
      3. THEN: Give specific recommendations and next steps
      4. FINALLY: Direct them to contact the team or take action
      
      AVOID: Asking endless follow-up questions once they've explained their needs
      FOCUS ON: Moving from discovery to solutions to action steps
      
      When a user has described their project/needs, respond with:
      - Brief acknowledgment of their requirements
      - Specific service recommendations 
      - Clear next steps (contact team, schedule consultation, etc.)
      - Contact information or action items
      
      Be conversational but goal-oriented. After understanding their needs, guide them toward taking action rather than asking more questions.`,
    };

    // Format conversation history - limit to last 6 messages to avoid repetition
    const recentHistory = conversationHistory.slice(-6);
    const messages = [
      systemMessage,
      ...recentHistory.map((msg) => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text,
      })),
      {
        role: "user",
        content: message,
      },
    ];

    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 200,
        temperature: 0.8,
        top_p: 0.9,
        frequency_penalty: 0.3,
        presence_penalty: 0.3,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content.trim();
    } else {
      throw new Error("Unexpected response format from OpenAI API");
    }
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
};

// Fallback responses when OpenAI is not available
export const getFallbackResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  // Web development responses
  const webResponses = [
    "I'd love to help you with web development! We create responsive, modern websites and e-commerce platforms. What type of website are you envisioning?",
    "Web development is one of our specialties! We build everything from simple landing pages to complex web applications. What's your project about?",
    "Exciting! We craft beautiful, functional websites that drive results. Are you looking for a business site, e-commerce store, or something else?",
    "Perfect! Our web development team creates stunning, user-friendly websites. Tell me more about your vision!",
  ];

  // Programming responses
  const programmingResponses = [
    "Custom software development is our passion! We build mobile apps, desktop applications, and tailored solutions. What kind of application do you have in mind?",
    "Great choice! We love tackling programming challenges. Are you thinking mobile app, desktop software, or a custom system?",
    "Programming projects are always exciting! We specialize in creating solutions that perfectly fit your needs. What problem are you trying to solve?",
    "Awesome! Our development team can bring any software idea to life. What type of application interests you most?",
  ];

  // Marketing responses
  const marketingResponses = [
    "Digital marketing can transform your business! We create campaigns that actually convert. What's your biggest marketing challenge right now?",
    "Smart thinking! Our marketing strategies help businesses grow exponentially. Are you looking to increase brand awareness or drive more sales?",
    "Marketing is where the magic happens! We specialize in social media, content creation, and targeted ads. What's your main business goal?",
    "Excellent! Our digital marketing approach focuses on real results. Tell me about your target audience - who are you trying to reach?",
  ];

  // SEO responses
  const seoResponses = [
    "SEO is crucial for online success! We help businesses dominate search results and attract quality traffic. How's your current website performing?",
    "Smart move! Good SEO can be a game-changer for your business. Are you struggling with search rankings or looking to improve further?",
    "SEO is our specialty! We use proven strategies to boost visibility and drive organic growth. What's your current biggest SEO challenge?",
    "Perfect timing! SEO investment pays off long-term. Are you starting fresh or looking to improve existing rankings?",
  ];

  // Greeting responses
  const greetingResponses = [
    "Hello there! 👋 Welcome to InnovativeTech Solutions. I'm excited to help you explore how we can boost your business with our tech services. What brings you here today?",
    "Hi! Great to meet you! I'm here to help you discover the perfect tech solution for your needs. What's on your mind?",
    "Hey! Welcome! I love helping businesses find the right technology solutions. What project or challenge can I help you with?",
    "Hello! Thanks for stopping by! Whether it's web development, apps, marketing, or SEO - I'm here to help. What interests you most?",
  ];

  // Pricing responses
  const pricingResponses = [
    "Great question! Pricing depends on your specific needs and project scope. Every business is unique, so we'd love to give you a personalized quote. Want to tell me more about your project?",
    "Investment varies based on what you're looking to achieve. We believe in transparent, fair pricing tailored to your goals. What kind of project are you considering?",
    "Smart to ask about budget! We work with businesses of all sizes and can often find creative solutions to fit different budgets. What's your ideal outcome?",
    "Pricing depends on the complexity and features you need. We offer free consultations to discuss your vision and provide accurate quotes. What's your project about?",
  ];

  // Check for detailed descriptions (longer messages likely contain project details)
  const isDetailedMessage =
    message.length > 50 ||
    lowerMessage.includes("need") ||
    lowerMessage.includes("want") ||
    lowerMessage.includes("looking for") ||
    lowerMessage.includes("project") ||
    lowerMessage.includes("business");

  // Action-oriented responses for detailed descriptions
  const actionResponses = [
    "Perfect! Based on what you've described, I think we can definitely help you achieve your goals. I'd recommend scheduling a free consultation with our team to discuss your project in detail. They can provide a customized proposal and timeline. Would you like me to connect you with them?",
    "Excellent! Your project sounds like a great fit for our services. Our team would love to dive deeper into the specifics and create a tailored solution for you. The best next step would be to schedule a free discovery call. Shall I help you get that set up?",
    "That sounds like an exciting project! Based on your requirements, I'd suggest speaking with our specialists who can provide expert guidance and a detailed proposal. We offer free consultations to explore your needs. Would you like to schedule one?",
    "Great! I can see exactly how our services align with your needs. The next step would be to connect you with our project team for a personalized consultation. They can assess your requirements and provide you with a comprehensive plan and quote. Interested in moving forward?",
  ];

  // Random response selector
  const getRandomResponse = (responseArray) => {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
  };

  // If it's a detailed message, provide action-oriented response
  if (
    isDetailedMessage &&
    !lowerMessage.includes("hello") &&
    !lowerMessage.includes("hi")
  ) {
    return getRandomResponse(actionResponses);
  }

  if (lowerMessage.includes("web") || lowerMessage.includes("website")) {
    return getRandomResponse(webResponses);
  }

  if (
    lowerMessage.includes("app") ||
    lowerMessage.includes("programming") ||
    lowerMessage.includes("software")
  ) {
    return getRandomResponse(programmingResponses);
  }

  if (lowerMessage.includes("marketing") || lowerMessage.includes("digital")) {
    return getRandomResponse(marketingResponses);
  }

  if (lowerMessage.includes("seo") || lowerMessage.includes("search")) {
    return getRandomResponse(seoResponses);
  }

  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("quote") ||
    lowerMessage.includes("budget")
  ) {
    return getRandomResponse(pricingResponses);
  }

  if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey") ||
    lowerMessage.includes("good")
  ) {
    return getRandomResponse(greetingResponses);
  }

  // Default varied responses
  const defaultResponses = [
    "That's interesting! I'd love to learn more about what you're looking for. How can our web development, programming, marketing, or SEO services help you?",
    "Thanks for reaching out! Tell me more about your project or business goals - I'm here to help you find the perfect solution.",
    "Great question! Whether you need a website, app, marketing boost, or better search rankings, we've got you covered. What's your main priority?",
    "I'm excited to help! Our team specializes in turning ideas into successful digital solutions. What challenge are you trying to solve?",
    "Awesome! We love helping businesses grow through technology. What aspect of your business are you looking to improve or expand?",
  ];

  return getRandomResponse(defaultResponses);
};
