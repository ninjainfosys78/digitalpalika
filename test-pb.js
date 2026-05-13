
import pb from "./lib/pocketbase.js";

async function testPb() {
  try {
    const records = await pb.collection("NinjaLanding_Partners").getFullList({
      sort: "Order,created",
    });
    console.log("Found", records.length, "partners");
    records.forEach(r => {
      console.log(`Name: ${r.Name}, Logo: ${r.Logo}, ID: ${r.id}`);
    });
  } catch (err) {
    console.error("Error fetching PB records:", err);
  }
}

testPb();
