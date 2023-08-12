export async function POST(req: Request, res: Response) {
  try {
    console.log("test");
  } catch (error) {
    console.log("TEST_POST", error);
  }
}

export async function GET(req: Request, res: Response) {
  try {
    console.log("test");
  } catch (error) {
    console.log("TEST_GET", error);
  }
}
