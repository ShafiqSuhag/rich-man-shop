
const useServerConfig = () => {
    if (process.env.NODE_ENV === 'production') {
        return "https://young-plains-03550.herokuapp.com"
      }else{
        return "http://localhost:5000"
      }
};

export default useServerConfig;