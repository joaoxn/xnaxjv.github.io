import java.util.Scanner;
import java.math.BigDecimal;

public class Calculadora {
    public static void main(String[] args) {

        boolean continueValue;
        do {
            System.out.println("Digite o primeiro número:");
            Scanner number1Scanned = new Scanner(System.in);
            BigDecimal number1Double = new BigDecimal(number1Scanned.next());

            System.out.println("Digite o operador:");
            Scanner operatorScanned = new Scanner(System.in);
            String operatorString = operatorScanned.next();

            System.out.println("Digite o segundo número:");
            Scanner number2Scanned = new Scanner(System.in);
            BigDecimal number2Double = new BigDecimal(number2Scanned.next());

            System.out.printf("O resultado é ");
            switch(operatorString) {
                case "+":
                    System.out.println(number1Double.add(number2Double));
                    break;
                case "-":
                    System.out.println(number1Double.subtract(number2Double));
                    break;
                case "*":
                    System.out.println(number1Double.multiply(number2Double));
                    break;
                case "/":
                    System.out.println(number1Double.divide(number2Double, 10, BigDecimal.ROUND_HALF_DOWN));
                    break;
                default:
                    System.out.println("indefinido. Operador inválido.");
                    System.out.println("Utilize + , - , * ou /");
                    break;
            }
            System.out.println("Quer continuar? (true/false)");
            Scanner continueScanned = new Scanner(System.in);
            continueValue = continueScanned.nextBoolean();
        } while (continueValue);
    }
}