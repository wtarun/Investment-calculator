import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const calculatedReturns = calculateInvestmentResults(input);
  const initialInvestment = calculatedReturns[0].valueEndOfYear - calculatedReturns[0].annualInvestment - calculatedReturns[0].interest;

  console.log("Result: ", calculatedReturns);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested capital</th>
          </tr>
        </thead>
        <tbody>
          {calculatedReturns.map(yearData => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest; 
            return (
                <tr key={yearData} >
                    <td>{yearData.year}</td>
                    <td> {formatter.format(yearData.valueEndOfYear)}</td>
                    <td> {formatter.format(yearData.interest)} </td>
                    <td> {formatter.format(totalInterest)} </td>
                    <td> {formatter.format(totalAmountInvested)} </td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
