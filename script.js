// 1. ገጹ ሲጫን የሚሰሩ ስራዎች
document.addEventListener('DOMContentLoaded', () => {
    console.log("የመኪና እቁብ ድረ-ገጽ ዝግጁ ነው!");

    // 2. እጣ ቁረጥ የሚለውን ቁልፍ ሲጫኑ የሚታይ መልዕክት
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // ለተወሰነ ሰከንድ መልዕክት ለማሳየት
            const carName = button.parentElement.querySelector('h3').innerText;
            alert(`${carName} እጣ ለመቁረጥ ወደ ቴሌግራም ቦታችን እየተላለፉ ነው...`);
        });
    });

    // 3. ገጹን ወደ ታች ሲያሸራትቱ የላይኛው ክፍል (Navbar) ዲዛይን እንዲቀይር
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 5%';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.padding = '15px 5%';
            nav.style.background = '#ffffff';
        }
    });
});

// 4. ለወደፊት የቲኬት ቁጥር መምረጫ ተግባር (ካስፈለገህ)
function calculatePrice(tickets) {
    const unitPrice = 2000; // ለምሳሌ
    return tickets * unitPrice;
}
