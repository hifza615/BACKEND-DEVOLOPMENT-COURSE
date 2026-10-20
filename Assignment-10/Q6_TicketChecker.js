let tickets = [
    {
        ticketId: 101,
        customerName: "Ali",
        status: "Open"
    },
    {
        ticketId: 102,
        customerName: "Sara",
        status: "In Progress"
    },
    {
        ticketId: 103,
        customerName: "Ahmed",
        status: "Resolved"
    }
];

function getTicket(ticketId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let ticket = tickets.find(function (item) {
                return item.ticketId === ticketId;
            });

            if (ticket) {
                resolve(ticket);
            } else {
                reject(new Error(
                    "Ticket not found. Please enter a valid ticket ID."
                ));
            }
        }, 2000);
    });
}

async function checkTicket() {
    let input = document.getElementById("ticketId");
    let message = document.getElementById("message");
    let ticketId = Number(input.value);

    if (input.value.trim() === "") {
        message.textContent = "Please enter a ticket ID.";
        return;
    }

    message.textContent = "Loading ticket details...";

    try {
        let ticket = await getTicket(ticketId);

        message.textContent =
            "Ticket ID: " + ticket.ticketId +
            " | Customer: " + ticket.customerName +
            " | Status: " + ticket.status;

        console.log("Ticket Details:", ticket);

    } catch (error) {
        message.textContent = error.message;
        console.log("Error:", error.message);
    }
}

document.getElementById("checkButton")
    .addEventListener("click", checkTicket);