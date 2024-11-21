using System;
using System.Linq;

public class Program
{
    public static void Main(string[] args)
    {
        // Software de validação de senha
        Console.Write("Digite uma senha:");
        String senha = ValidarSenha(Console.ReadLine());

        Console.Write("\nConfirme a senha:");
        String confirmaSenha = ValidarSenha(Console.ReadLine());

        bool igual = ComparaTexto(senha, confirmaSenha);

        if (igual) // senha == confirmaSenha
            Console.WriteLine("\nArmazenando dados!");
        else
            Console.WriteLine("\nRefaca o processo!");

    }

    private static string ValidarSenha(string texto)
    {
        if (texto.Length < 8)
            Console.WriteLine("Tamanho invalido!");
        if (!texto.Any(char.IsDigit))
            Console.WriteLine("Nao possui numeros!");
        if (!texto.Any(char.IsUpper))
            Console.WriteLine("Nao possui letra maiuscula!");
        if (!texto.Any(c => !char.IsLetterOrDigit(c)))
            Console.WriteLine("Nao possui caractere especial!");

        return texto;
    }

    private static bool ComparaTexto(string senha, string confirmaSenha, bool ignora = false)
    {
        if (ignora)
        {
            senha = senha.ToLower();
            confirmaSenha = confirmaSenha.ToLower();
        }

        if (senha == confirmaSenha)
        {
            Console.WriteLine("\nSenhas conferem!");
            return true;
        }
        else
        {
            Console.WriteLine("\nSenhas nao conferem!");
            return false;
        }

    }
}