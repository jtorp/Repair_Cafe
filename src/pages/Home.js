import Button from "../components/UI/Button";
import Section from "../components/UI/Section"

const Home = () => {
  return (
    <main className="w-screen">
      <div className="bg-grayWhite">
        <Section> 
        hero section -> text wrap
        </Section>
        <Section> 
        dark calendar 
        </Section>
        <Section> 
        find locations section -> view all btn -> link to all location page
        </Section>
        <Section> 
        dark faq accordion section
        </Section>
        <Section> 
       colorfult contact us section
        </Section>
        <Section> 
        dark footer section
        </Section>
      </div>
    </main>
  );
};

export default Home
