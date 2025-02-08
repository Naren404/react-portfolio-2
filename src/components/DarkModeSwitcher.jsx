const DarkModeSwitcher = () => {
  return ( 
    <>
      <label className="dark-mode-toggle" htmlFor="dark-mode">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />
    </>
   );
}
 
export default DarkModeSwitcher;