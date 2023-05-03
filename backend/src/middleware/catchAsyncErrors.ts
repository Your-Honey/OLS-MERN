export default myFunc => (req: any, res: any, next: any) => {
    Promise.resolve(myFunc(req, res, next)).catch(next);
}