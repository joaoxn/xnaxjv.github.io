import java.util.Scanner;

public class JogoForca {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] palavras = {
                "LAB365",
                "FULLSTACK",
                "BACK END",
                "PROGRAMADOR FULLSTACK",
                "DISCORD",
                "DEV OPS",
                "FRONT END",
                "INTELIGENCIA ARTIFICIAL",
                "DATABASE",
                "MERCADO DE TRABALHO",
                "STRING",
                "ARRAYS",
                "LINGUAGEM ORIENTADA A OBJETOS",
                "JAVASCRIPT",
                "PYTHON",
                "BINARIO",
                "METADADOS",
                "REALIDADE VIRTUAL",
                "TECNOLOGIA DA INFORMACAO",
                "STACK OVERFLOW",
                "PLANEJAMENTO",
                "JOGO DA FORCA",
                "PROCESSAMENTO"
        };

        System.out.println("JOGO DA VELHA INICIADO! Pronto para o desafio?? (true/false)");
        boolean prosseguir = scanner.nextBoolean();
        while (prosseguir) {
            boolean acabou = false;
            byte loopCounter = 0;
            boolean venceu = true;
            double randomNumber = Math.random() * palavras.length;
            String palavraSecreta = palavras[(int) Math.round(randomNumber)];
            StringBuilder palavraDisplay = new StringBuilder();
            int maximoTentativas = palavraSecreta.length() + 3;
            char[] letrasTestadas = new char[maximoTentativas];
            System.out.println("AVISO: Digite APENAS LETRAS MAIÚSCULAS! (Case sensitive não foi desativado)");
            do {
                acabou = true;
                palavraDisplay.delete(0, 10000000);
                for (byte i = 0; i < palavraSecreta.length(); i++) {
                    char caractere = palavraSecreta.charAt(i);
                    if (caractere == ' ') {
                        palavraDisplay.append(' ');
                    } else if (arrayTemLetra(letrasTestadas, caractere)) {
                        palavraDisplay.append(caractere);
                    } else {
                        palavraDisplay.append('_');
                        acabou = false; //if any letter is not revealed, game does not end.
                    }
                }
                System.out.println("Palavras testadas:");
                for (byte i = 0; i < letrasTestadas.length; i++) {
                    if (i == letrasTestadas.length - 1) {
                        System.out.println(letrasTestadas[i]);
                    } else {
                        System.out.print(letrasTestadas[i] + ", ");
                    }
                }
                System.out.println("(" + palavraSecreta.length() + ") - " + palavraDisplay);
                if (loopCounter == maximoTentativas) {
                    venceu = false;
                    break;
                }
                if (!acabou) {
                    System.out.print("Teste uma letra: ");
                    char letraTestada = scanner.next().charAt(0);
                    letrasTestadas[loopCounter] = letraTestada;
                    loopCounter++;
                }
            } while (!acabou);
            if (venceu) {
                System.out.println("Você venceu!");
            } else {
                System.out.println("Você perdeu!");
            }
            System.out.println("Fim de jogo! Deseja jogar novamente? (true/false)");
            prosseguir = scanner.nextBoolean();
        }
    }

    public static boolean arrayTemLetra(char[] charArray, char targetLetter) {
        for (char currentLetter : charArray) {
            if (currentLetter == targetLetter) {
                return true; // Return the matching letter
            }
        }
        return false; // Return a default value (e.g., space) or consider using a special value to indicate no match
    }
}
