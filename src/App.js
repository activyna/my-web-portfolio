import './App.css';
import { motion } from "framer-motion"
import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';

function App() {
  return (
    <motion.div className='Layout'>

      {/*Section 1*/}
      
      <SectionOne/>
    
      {/*Section 2*/}
      <SectionTwo/>



    </motion.div>
  );
}

export default App;
