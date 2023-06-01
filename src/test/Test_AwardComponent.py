import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.chrome.options import Options
options = Options()
options.add_argument('--headless')
py = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
#py = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

class TestAwardComponent:

    def testSlickSlide(self):
        #IR A ROOTSTACK WEB
        py.get("http://localhost:3000/")
        py.set_window_position(0, 0)
        py.set_window_size(1280, 1024)
        time.sleep(3)
        #click en login page
        LoginBtn = py.find_element(By.CSS_SELECTOR, "button:nth-child(1)")
        LoginBtn.click()
        time.sleep(5)
        #insertar email
        email = py.find_element(By.ID,"username").send_keys("diegolmedosz@gmail.com")
        #insertar password
        pwd = py.find_element(By.ID, "password").send_keys("Dosz1337*")
        SubmitBtn = py.find_element(By.CSS_SELECTOR,"div[class='c79fd81e4'] button[name='action']").click()
        time.sleep(5)
        #PRIMERA VALIDACIÓN
        py.find_element(By.CSS_SELECTOR,"div[class='principalTitle'] div h2").is_displayed = True

        #IR A BLOGS
        GoToIBLOGS = py.find_element(By.CSS_SELECTOR, ".ButtonTitle").click()
        time.sleep(3)
        #SEGUNDA VALIDACIÓN
        assert py.current_url == "http://localhost:3000/bloglist"
        #TERCERA VALIDACIÓN
        py.find_element(By.CSS_SELECTOR,"input[placeholder='Try typing a movie!']").send_keys("wick")
        py.find_element(By.CSS_SELECTOR, "button[alt='search']").click()
        time.sleep(5)
        py.find_element(By.XPATH, "//h3[normalize-space()='John Wick: Chapter 2']").is_displayed = True
        py.find_element(By.XPATH, "//h3[normalize-space()='John Wick: Chapter 2']").click()
        time.sleep(3)
        #agregar a favoritos
        py.find_element(By.CSS_SELECTOR, "button:nth-child(1)").click()
        #ir a favoritos
        py.get("http://localhost:3000/favorites")
        time.sleep(3)
        #CUARTA VALIDACIÓN
        py.find_element(By.CSS_SELECTOR,"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").is_displayed = True
        #QUINTA VALIDACIÓN
        py.find_element(By.CSS_SELECTOR,"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > button:nth-child(1)").click()
        py.get("http://localhost:3000/favorites")
        time.sleep(3)
        py.find_element(By.CSS_SELECTOR,"body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").is_displayed = False









