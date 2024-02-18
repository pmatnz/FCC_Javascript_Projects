/**********************Access to buttons and input**********************/
const customerBox = document.getElementById("customer-box");
const locationBox = document.getElementById("location-text");
const svidBox = document.getElementById("svid");
const cvidBox = document.getElementById("cvid");
const addressBox = document.getElementById("address");
const customerNameBox = document.getElementById("customerName");
const handoverBox = document.getElementById("handover-box");
const dropdownList = document.getElementById("dropdown-list");
const TestButton = document.getElementById("tester");
const Listdata = document.getElementById("data");

/**********************LFC Handover List with ports **********************/
//prettier-ignore
const handoverList = {
    Hamilton: [
        "UFFFNXHM3000001 hncrwr3 1/1/4 |",
        "IDA120731620 hncrwr1 2/1/6"
    ],
    Tauranga: [
        "UFFFNXTG3000004 tgcre1 6/1/2 |",
        "IDA120734640 tgcrer2 1/1/4"
    ],
    NewPlymouth: [
        "UFFFNXNP3000001 npexwr1 1/1/10"
    ],
    Whanganui: [
        "UFFFNXWA3000001 wgexwr1 1/1/10 |",
        "IDA120713719 whexer1 1/1/10"
    ],
    Christchurch: [
        "ENFIXOTS138296 chenrrw 3/1/1 |",
        "IDA120732835 chcrer2 1/1/5"
    ],
    Whangarei: [
        "5003 wiexwr1 1/1/10"
    ],
    Napier: [
        "UNL39442 naexer1 3/1/4 |",
        "IDA120713699 naexer1 1/1/10"
    ],
    Rotorua: [
        "UNL39443 rtexer1 3/1/2 |",
        "IDA120713712 rtexer1 1/1/10"
    ],
    Taupo: [
        "UNL39444 tpexer1- 3/1/2 |",
        "IDA120713718 tpexer1 1/1/10"
    ],
    Ashburton: [
        "IDA120713684 asexer1 1/1/10"
    ],
    Blenheim: [
        "IDA120713685 bmexer1 1/1/10"
    ],
    Dunedin: [
        "IDA120737156 dncrw1 3/1/2"
    ],
    Greymouth: [
        "IDA120723994 gmexwr1 1/1/10"
    ],
    Auckland: [
        "IDA120713678 akcrer1 2/1/9"
    ],
    Wellington: [
        "IDA120713720 wncrer1 2/1/10"
    ],
    Queenstown: [
        "IDA120734858 qtexwr1 4/1/1"
    ]
};
/**********************Customer Handover List**********************/
//prettier-ignore
const customer_handover_list = {
    DigitalIsland: [
        "BS2 FNX0003131 akvodrw 1/1/52 101. next available cvid",
        "BS3 FNX0003131 akvodrw 1/1/52 next available svid.*",
    ],
    WirelessNation: [
        "FNX0000247 aktdcre 1/1/10 SVID 1302 CVID next available"
    ],
    Vetta: [
        "FNX0003776 aktdcre:1/1/18 101. next available cvid"
    ],
    TheDigitalLab: [
        "FNX0000214 akcrer2 3/1/6 next svid/cvid (not sure if they need cvid?)"
    ],
    Xtreme: [
        "FNX0004734 wnxdcre 1/1/28 100. next available cvid"
    ],
    Vector: [
        "Auckland: FNX0000218 aktdcre 1/1/3 next available svid.*",
        "Wellington: FNX0000219 wncrer2 1/1/1 next available svid.*",
        "Christchurch: FNX0000209 chcrer2 1/1/10 next available svid.*",
        "BS2: Make sure to use SVID 2 and next available CVID"
    ],
    AshNet: [
        "FNX0020346 aktdcre:1/1/17, 101. next cvid"
    ]
};

TestButton.addEventListener("click", getEpipeDetails);

function getEpipeDetails() {
	Listdata.innerHTML = `<p>Copy correct handover, TFF or Chorus ${getHandoverLocation()} your SVID is ${
		svidBox.value
	} your CVID is ${cvidBox.value}, Customer address is
	${addressBox.value} and Customer name is ${
		customerNameBox.value
	} , Please select Customer ENNI ${getCustomerLocation()}</p>`;
}

function getHandoverLocation(finalData) {
	let handoverEntries = Object.entries(handoverList);
	for (let i = 0; i < handoverEntries.length; i++) {
		let [location] = handoverEntries[i]; // Location has brackets to destructure the array as it has key an values
		if (location === locationBox.value) {
			finalData = handoverEntries[i];
		}
	}
	return finalData;
}

function getCustomerLocation(customerData) {
	let handoverEntries = Object.entries(customer_handover_list);
	for (let i = 0; i < handoverEntries.length; i++) {
		let [location] = handoverEntries[i]; // Location has brackets to destructure the array as it has key an values
		if (location === customerBox.value) {
			customerData = handoverEntries[i];
		}
	}
	return customerData;
}
