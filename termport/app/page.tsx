import InputCmd from "@/components/Input/input";
import Mobile from "@/components/mobile/page";
export default function Home() {
  return (
    
    <div>
      <div className="block md:hidden">
        <Mobile/> 
      </div>
      <div className="hidden md:block">
      <InputCmd/>

      </div>

    </div>
    
    
    
  );
}
