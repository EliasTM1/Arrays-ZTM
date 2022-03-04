let allFirstBatch = [
  { name: "Beth", phone: 7046505211, address: "Sharon Road" },
  { name: "Peter", phone: 7048962000, address: "Gatesmills Avenue" },
  { name: "Denis", phone: 7043405435, address: "Avatar Drive" },
  { name: "Daniel", phone: 7043643888, address: "Castleton Rd" },
  { name: "Kelley", phone: 7045529292, address: "Parson Street" },
  { name: "Tiffani", phone: 7324920113, address: "Camilla Road" },
  { name: "Michael", phone: 7042317750, address: "Airlie Street" },
  { name: "Chloe", phone: 7143139358, address: "Pinehurst Place" },
  { name: "Jennifer", phone: 7043646400, address: "Whitemarsh Court" },
  { name: "Bobby", phone: 7043024464, address: "Cranbrook Lane" },
  { name: "Amy", phone: 7049059189, address: "Tarrington Avenue" },
  { name: "Dawn", phone: 7049756681, address: "Sunflower Road" },
  { name: "O Douglas", phone: 7047780110, address: "6814 Pence Road" },
  { name: "Kelley ", phone: 7045529292, address: "1921 Parson Street" },
  { name: "Maggie ", phone: 7046513405, address: "5830 Underwood Avenue" },
  { name: "Jacki", phone: 4804702210, address: "6303 Pensfold Drive" },
  { name: "Matt", phone: 7042012889, address: "8011 Litaker Manor Court" },
  { name: "Reed Jackson", phone: 7049965686, address: "7114 Old Dairy Lane" },
];



function mapMyCustomer(object) {

  object.map(e => {
    console.log("");
    console.log("");

    console.log(`Hello ${e.name} we saw the property in ${e.address} we would like to offer a free drone photo-shoot, since we are looking to expand our portfolio currently we have 5 sessions available - COMPLETELY FREE! - this is to expand our gallery on social media and web page.
    
    No hassle on this, pictures come with a small watermark, we can include measurements of the land if provided.
    
    The images are for the customer and-or Realtor to keep and use at will.
    
    Best Regards.
    
    Elias Toscano.
    
    CLT Express Drone Photography Team
    We are working on the name!!! 😉`).

      console.log("");
    console.log("");
  })
}


mapMyCustomer(allFirstBatch)


let phoneNumber = [
  "7046505211",
  "7048962000",
  "7043405435",
  "7043643888",
  "7045529292",
  "7324920113",
  "7042317750",
  "7143139358",
  "7043646400",
  "7043024464",
  "7049059189",
  "7049756681",
  "7047780110",
  "7045529292",
  "7046513405",
  "4804702210",
  "7042012889",
  "7049965686"
]