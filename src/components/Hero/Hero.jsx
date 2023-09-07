import styles from '../../style';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Nilai Mata</span> Uang{' '}
            <span className="text-white">6 Negara </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[4rem] text-[3rem] text-white ss:leading-[6rem] leading-[5rem]">
            Valuasi <br className="sm:block hidden" /> <span className="text-gradient">Mata</span>{' '}
            Uang
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Mata uang adalah alat tukar yang digunakan dalam sistem keuangan global. Tingkat
          pertukaran mata uang, atau currency rates, mengacu pada nilai relatif satu mata uang
          terhadap mata uang lainnya. Ini adalah konsep penting dalam ekonomi dan keuangan
          internasional, dan perubahan dalam nilai tukar mata uang dapat memiliki dampak yang
          signifikan pada perdagangan internasional, investasi, dan ekonomi nasional.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={'/hand.png'} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
