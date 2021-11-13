
const useServerConfig = () => {
    if (process.env.NODE_ENV === 'production') {
        return "https://sheltered-badlands-24171.herokuapp.com/"
      }else{
        return "http://localhost:5000"
      }
};

export default useServerConfig;