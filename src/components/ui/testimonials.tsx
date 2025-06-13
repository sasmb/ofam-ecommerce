"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialData = [
  {
    name: "Adunni Bakare",
    title: "Restaurant Owner, Lagos",
    quote: "The finest palm oil we've ever used",
    content: "OFAM's premium palm oil has completely transformed our restaurant's dishes. The rich, authentic taste and vibrant color make every meal extraordinary. Our customers can taste the difference!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Chukwudi Okafor",
    title: "Food Distributor, Abuja",
    content: "Working with OFAM has been a game-changer for our distribution business. Their consistency, quality, and commitment to sustainable practices align perfectly with our values.",
    quote: "Exceptional quality and reliability",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Fatima Al-Hassan",
    title: "Chef, Port Harcourt",
    content: "As a professional chef, I demand the highest quality ingredients. OFAM's palm oil delivers that premium taste and nutrition my clients expect from authentic Nigerian cuisine.",
    quote: "Premium taste that speaks quality",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emmanuel Nwosu",
    title: "Organic Food Store Owner",
    content: "Our customers specifically ask for OFAM palm oil. The sustainable production methods and premium quality make it the perfect fit for our organic store.",
    quote: "Customers ask for OFAM by name",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Blessing Okoro",
    title: "Catering Business, Kano",
    content: "Since switching to OFAM, our catering business has seen incredible growth. The rich flavor profile and consistent quality help us deliver authentic Nigerian dishes every time.",
    quote: "Incredible growth since switching to OFAM",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Ahmed Bello",
    title: "Wholesale Buyer, Kaduna",
    content: "OFAM understands the wholesale market. Their competitive pricing, reliable supply chain, and premium quality make them our preferred palm oil supplier.",
    quote: "Our preferred palm oil supplier",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    rating: 5
  }
];

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timeout = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 5000); // Slower auto-scroll for testimonials

    return () => clearTimeout(timeout);
  }, [api, current]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full py-20 lg:py-32 bg-gradient-to-br from-brand-cream via-brand-cream to-brand-olive/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl tracking-tight font-bold text-brand-olive mb-6">
              Trusted by Nigerian Food Leaders
            </h2>
            <p className="text-lg md:text-xl text-brand-olive/80 leading-relaxed">
              See what chefs, restaurants, and food businesses across Nigeria say about OFAM's premium palm oil
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonialData.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2 xl:basis-1/2" key={index}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-brand-olive/10 h-full p-8 aspect-[4/3] flex justify-between flex-col shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/90">
                    {/* Rating Stars */}
                    {renderStars(testimonial.rating)}
                    
                    {/* Quote */}
                    <div className="flex flex-col gap-6 flex-1">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold tracking-tight text-brand-olive">
                          "{testimonial.quote}"
                        </h3>
                        <p className="text-brand-olive/80 text-base leading-relaxed line-clamp-4">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex flex-row gap-3 text-sm items-center pt-4 border-t border-brand-olive/10">
                      <Avatar className="h-10 w-10 border-2 border-brand-orange/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-brand-orange/10 text-brand-orange font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-semibold text-brand-olive">{testimonial.name}</span>
                        <span className="text-brand-olive/60 text-xs">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Trust indicators */}
          <div className="text-center">
            <p className="text-brand-olive/60 text-sm">
              Join <span className="font-semibold text-brand-orange">500+</span> Nigerian businesses who trust OFAM for premium palm oil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Testimonials }; 