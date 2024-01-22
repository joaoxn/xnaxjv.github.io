import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Scanner;

public class TextFileManager {

        private final String filePath;

        public TextFileManager(String filePath) {
                this.filePath = filePath;
        }

        public void addText(String text) {
                try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath, true))) {
                        writer.write(text);
                        writer.newLine();
                } catch (IOException e) {
                        e.printStackTrace();
                }
        }

        public String downloadTextFile() {
                try {
                        byte[] fileContent = Files.readAllBytes(Path.of(filePath));
                        return new String(fileContent);
                } catch (IOException e) {
                        e.printStackTrace();
                        return null;
                }
        }

        public static void main(String[] args) {
                // Example usage
                TextFileManager textFileManager = new TextFileManager("example.txt");
                Scanner scanner = new Scanner(System.in);
                // Adding text to the file
                textFileManager.addText(scanner.next());

                // Downloading and printing the file content
                String fileContent = textFileManager.downloadTextFile();
                System.out.println("File Content:\n" + fileContent);
        }
}