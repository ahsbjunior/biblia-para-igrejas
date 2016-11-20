arquivoCSV = "books.csv"

File.open(arquivoCSV, "r:UTF-8").each do |line|
   arrayCSV = line.split(",") 
   # mudando o arquivo tipo 44.html
   enderecoArquivo = "#{arrayCSV[0]}.html" 
   conteudo = File.read(enderecoArquivo)
   conteudo = conteudo.sub("</table>", "<tr><th colspan='10'><a href='index.html'>Índice dos livros</a></th></tr></table>")
   File.open("#{arrayCSV[0]}.html", "w") { | file |
       file.write conteudo
   }

   # mudando o arquivo tipo 44-1.html
   for i in 1..arrayCSV[2].to_i
       enderecoArquivo = "#{arrayCSV[0]}-#{i}.html"
       conteudo = File.read(enderecoArquivo)
       conteudo = conteudo.sub("</table>", "<tr><th colspan='10'><a href='index.html'>Índice dos livros</a></th></tr></table>")
       File.open(enderecoArquivo, "w") { | file |
           file.write conteudo
       }
   end
end

