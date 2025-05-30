const tabs = [
    "about", "download", "code"
];
document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.getElementsByTagName("button")).forEach(button => {
      button.style.position = 'relative'; 
  
      button.addEventListener("click", (event) => {
        
  
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
  
        const diameter = Math.max(button.clientWidth, button.clientHeight) * 2;
        ripple.style.width = ripple.style.height = `${diameter}px`;
  
        ripple.style.top = `50%`;
        ripple.style.right = `0`;
        ripple.style.transformOrigin = 'center right';
  
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.opacity = '1';
        ripple.style.pointerEvents = 'none';
  
        button.appendChild(ripple);
  
        ripple.offsetHeight;
        ripple.style.animation = "ripple-effect 700ms ease";
  
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      });
    });

    tabs.forEach((tab) => {
        document.getElementById(`${tab}-btn`).addEventListener("click", () => {
            document.location.href = "#";
            document.location.href = `#${tab}`;
        });
    });

    document.getElementById("versions").addEventListener("click", () => {
      window.location.href = "./version-browser.html"
    });
    document.getElementById("copyright").textContent=`© Starry Linux, ${new Date(Date.now()).getFullYear()}`;
  });
  

function popup(text) {
  const pop_up = document.createElement("div");
  const paragraph = document.createElement("p");
  const ok = document.createElement("button");
  paragraph.textContent = text;
  ok.textContent = "OK";
  ok.addEventListener("click", () => {
    pop_up.style.animation = "fadeIn 0.3s";
    setInterval(() => {pop_up.remove();}, 300);
  });

  pop_up.appendChild(paragraph);
  pop_up.appendChild(ok);
  document.body.appendChild(pop_up);
  pop_up.classList.add("popup");
}