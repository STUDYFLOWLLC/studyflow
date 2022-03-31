const HomeFooter = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 100">
        <path
          className="fill-blue-400"
          d="m0 33 16.7 4c16.6 4 50 12 83.3 13.7 33.3 1.6 66.7-3 100-5s66.7-1.4 100 4.5c33.3 5.8 66.7 16.8 100 14 33.3-2.9 66.7-19.5 100-25.5s66.7-1.4 100 3.5c33.3 4.8 66.7 9.8 100 14 33.3 4.1 66.7 7.5 100 4.3s66.7-12.8 83.3-17.7L900 38v63H0Z"
          fill="#06F"
        />
      </svg>
      <div className="absolute bottom-0 w-full">
        <p className="text-stone-100 text-center">© 2022 STUDYFLOW</p>
      </div>
    </div>
  )
}

export default HomeFooter
