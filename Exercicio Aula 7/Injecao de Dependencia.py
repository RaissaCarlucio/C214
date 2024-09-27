class Xayah:
    def execute(self):
        return "Xayah usa sua habilidade: Tempestade de Plumas"

class Sett:
    def execute(self):
        return "Sett usa sua habilidade: Quebra-Caras!"

# Classe do personagem (campeão) que depende de uma habilidade
class Champion:
    def __init__(self, name: str, skill):
        self.name = name
        self.skill = skill  # Habilidade é injetada no campeão

    # O campeão usa a habilidade que foi injetada
    def use_skill(self):
        return f"{self.name} esta {self.skill.execute()}"

# Injeção de dependência:
if __name__ == "__main__":
    xayah = Champion("Xayah", Xayah())
    sett = Champion("Sett", Sett())

    # Usando habilidades
    print(xayah.use_skill()) 
    print(sett.use_skill())    