import "./Hint.css";

const Hint = ({ country }) => {
  return (
    <div className="hint">
      <table class="table">
        <thead>
          <tr>
            <th>Guesses Left</th>
            <th>Hint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hint;
