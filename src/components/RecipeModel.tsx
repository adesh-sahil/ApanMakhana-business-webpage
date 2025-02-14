import { X } from 'lucide-react';

const RecipeModal = ({ recipe, onClose }: { recipe: { name: string; description: string; ingredients: string[]; instructions: string[] }, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto dark:bg-slate-600">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <X className="w-5 h-5 dark:text-white" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
        <p className="text-gray-700 mb-4 dark:text-gray-300">{recipe.description}</p>
        
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4 dark:text-gray-300">
          {recipe.ingredients.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside dark:text-gray-300 mb-3">
            {recipe.instructions.map((step: string, index: number) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
     
      </div>
    </div>
  );
};

export default RecipeModal;
