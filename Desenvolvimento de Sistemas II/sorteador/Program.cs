﻿// Instancia a classe que gera numero randomicos
Random random = new Random();
// Gera um número aleatório de 0 a 10
int numeroAleatorio = random.Next(0, 11);
int tentativas = 1;
Console.WriteLine($"=============== O GRANDE SORTEIO ================");

// Console.WriteLine($"Numero Sorteado: {numeroAleatorio}");

while (tentativas < 4)
{
    Console.WriteLine($"Tente acertar o numero sorteado...");
    Console.WriteLine($"Voce possui [ {4 - tentativas} ] tentativa(s)");
    Console.Write($"Digite um numero de 0 a 10: ");
    try
    {
        int numeroDigitado = int.Parse(Console.ReadLine());
        if (numeroDigitado > -1 && numeroDigitado < 11)
        {
            if (numeroDigitado == numeroAleatorio)
            {
                Console.WriteLine($"\n\nParabens!!!\nVocê acertou o número em [ {tentativas} ] tentativa(s)");
                tentativas = 4;
            }
            else
            {
                Console.WriteLine($"Errou, tente novamente!");

                if (tentativas == 3)
                {
                    Console.WriteLine($"\n\nPERDEUUUUUUU!!!!!");
                }
            }
            tentativas++;
        }
        else
        {
            Console.WriteLine($"BURRO!!! Numero de 0 a 10!");
        }
    }
    catch (Exception e)
    {
        Console.WriteLine("INDIOTA, digite apenas numeros");
    }
    Console.WriteLine("");
}
