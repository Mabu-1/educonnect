import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionTitle } from "@/components/section-title";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CheckCheck } from "lucide-react";
import { Presentation } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { BookCheck } from "lucide-react";
import { Clock10 } from "lucide-react";
import { Radio } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Video } from "lucide-react";
import { NotepadText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { SquarePlay } from "lucide-react";
import { Tv } from "lucide-react";
import { StickyNote } from "lucide-react";
import { BookOpen } from "lucide-react";
import { ArrowRight } from "lucide-react";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseInstructor from "./_components/CourseInstructor";
import Testimonials from "./_components/Testimonials";
import { getCourseDetails } from "@/queries/courses";
import RelatedCourses from "./_components/RelatedCourses";
import { replaceMongoIdInArray } from "@/lib/convertData";


const SingleCoursePage = async ({params: {id}}) => {
    const course = await getCourseDetails(id);

  
  return (
<>
<CourseDetailsIntro  course={course} />
<CourseInstructor/>
{course?.testimonials && <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />}
<RelatedCourses/>

</>
 
  );
};
export default SingleCoursePage;
