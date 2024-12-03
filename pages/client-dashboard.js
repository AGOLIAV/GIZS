import React from 'react';

const ClientDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Приветственное сообщение */}
      <h1 className="text-3xl font-bold text-center mb-5">
        Добро пожаловать в личный кабинет!
      </h1>
      
      {/* Дополнительный контент, который вы можете добавить позже */}
      <p className="text-lg text-center text-gray-600">
        Здесь вы можете управлять своими проектами, просматривать статус выполнения и многое другое.
      </p>
    </div>
  );
};

export default ClientDashboard;
