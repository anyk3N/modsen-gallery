import React from 'react';
import { Title, TitleContainer } from './HeroSection.styles';

const HeroSection = () => {
  return (
    <TitleContainer>
      <Title>
        let&apos;s find some <br />
        <span>Images</span> here!
      </Title>
    </TitleContainer>

    // <section className={styles.titleSec}>
    //     <div className={styles.container}>
    //         <h2 className={styles.titleText}>
    //             let's find some
    //             <br />
    //             <span className={styles.spanText}>Images</span> here!
    //         </h2>
    //     </div>
    // </section>
  );
};

export default HeroSection;
