import java.util.Random;
import java.util.Scanner;

public class Game { // 类名首字母要大写
    public static void main(String[] args) { // 花括号上下格式要一样
        Random generator = new Random();
        int a;
        a = generator.nextInt(100);
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入心中的数字：");
        int num = scanner.nextInt();
        while (num != a) {
            if (num > a) {
                System.out.println("大了，再试试？");
            } else {
                System.out.println("小了，再试试？");
            }
            num = scanner.nextInt();
        }
        System.out.println("恭喜你答对了！");
    }
}