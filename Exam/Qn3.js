const btn = document.getElementById("payBtn")
const paymentStatus = document.getElementById("paymentStatus")

btn.addEventListener("click", () =>
{
    paymentStatus.textContent = "Processing payment..."
    new Promise(resolve =>
    {
        setTimeout(resolve, 2000)
    }).then(() =>
    {
        paymentStatus.textContent = "Payment Successful!"
        btn.disabled = true
    })
})