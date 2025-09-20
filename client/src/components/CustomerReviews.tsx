import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Chetan Shinde",
    location: "Sambhajinagar",
    service: "Food License",
    rating: 5,
    review: "Excellent service for FSSAI license processing. The staff was very helpful and completed all paperwork efficiently. Highly recommended for food business licensing.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rushikesh Jumbad",
    location: "Sambhajinagar",
    service: "Online Forms",
    rating: 5,
    review: "Very professional service. They helped me fill out multiple government forms correctly and saved me a lot of time. Great customer support.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Adinath Mahangare",
    location: "Satara",
    service: "Admission Forms",
    rating: 4,
    review: "Helped with college admission forms for my daughter. Quick and reliable service. Staff is knowledgeable about the admission process.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Satish Sonawane",
    location: "Phulambri",
    service: "Xerox & Printing",
    rating: 5,
    review: "Best printing quality in the area. Fast service and reasonable rates. Very convenient location near the bus stand.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Gaurav Walunje",
    location: "Sambhajinagar",
    service: "Multiple Services",
    rating: 5,
    review: "Complete one-stop solution for all documentation needs. Professional staff and excellent customer service. Been using their services for over a year.",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Aniket Darade",
    location: "Sambhajinagar",
    service: "Online Forms",
    rating: 4,
    review: "Efficient and trustworthy service. They handle all the technical aspects of online form submission. Good value for money.",
    date: "3 weeks ago"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating 
              ? "fill-chart-2 text-chart-2" 
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="pt-8 pb-20 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-reviews-title">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6" data-testid="text-reviews-description">
            Real feedback from satisfied customers who trust Mauli Online Center for their documentation and licensing needs.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-lg font-semibold text-foreground" data-testid="text-average-rating">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
            <div className="text-sm text-muted-foreground" data-testid="text-total-reviews">
              Based on {reviews.length} reviews
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="hover-elevate border-card-border relative"
              data-testid={`card-review-${review.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-reviewer-name-${review.id}`}>
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-reviewer-location-${review.id}`}>
                        {review.location}
                      </p>
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-primary/30" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <StarRating rating={review.rating} />
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-service-${review.id}`}>
                      {review.service}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-review-content-${review.id}`}>
                    "{review.review}"
                  </p>

                  <div className="text-xs text-muted-foreground pt-2 border-t border-card-border" data-testid={`text-review-date-${review.id}`}>
                    {review.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-card rounded-xl p-6 border border-card-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary" data-testid="text-happy-customers">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary" data-testid="text-five-star-reviews">98%</div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary" data-testid="text-repeat-customers">85%</div>
              <div className="text-sm text-muted-foreground">Repeat Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}