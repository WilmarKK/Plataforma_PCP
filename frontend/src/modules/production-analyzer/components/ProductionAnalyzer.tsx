import React, { useState, useEffect } from 'react';
import { 
  Database, 
  BarChart3, 
  TrendingUp, 
  FileSpreadsheet,
  Settings,
  Activity,
  Zap,
  Target,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Download,
  Upload,
  Filter,
  Search,
  RefreshCw,
  Eye,
  Edit3,
  Calendar,
  Factory,
  LucideIcon
} from 'lucide-react';
import styles from './ProductionAnalyzer.module.css';

// Interfaces tipadas
interface MockOP {
  id: string;
  produto: string;
  status: string;
  oee: number;
  disponibilidade: number;
  performance: number;
  qualidade: number;
}

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

interface DataSource {
  title: string;
  desc: string;
  icon: LucideIcon;
  status: 'connected' | 'ready' | 'pending';
}

interface KPI {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

interface StatusItem {
  status: string;
  count: number;
  percentage: number;
  color: string;
}

interface Metric {
  label: string;
  value: number;
  color: string;
}

interface Insight {
  title: string;
  description: string;
  action: string;
  icon: LucideIcon;
  color: string;
}

export const ProductionAnalyzer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('data');
  const [currentScreen, setCurrentScreen] = useState<string>('main'); // Novo estado para navegação
  const [animationDelay, setAnimationDelay] = useState<number>(0);

  // Dados mockados para demonstração
  const mockOPs: MockOP[] = [
    { id: 'OP-001', produto: 'Produto A', status: 'Concluída', oee: 87, disponibilidade: 92, performance: 89, qualidade: 95 },
    { id: 'OP-002', produto: 'Produto B', status: 'Em Andamento', oee: 73, disponibilidade: 88, performance: 82, qualidade: 91 },
    { id: 'OP-003', produto: 'Produto C', status: 'Planejada', oee: 0, disponibilidade: 0, performance: 0, qualidade: 0 },
    { id: 'OP-004', produto: 'Produto D', status: 'Atrasada', oee: 65, disponibilidade: 78, performance: 84, qualidade: 87 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDelay(100), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs: Tab[] = [
    { id: 'data', label: 'Entrada de Dados', icon: Database, color: 'from-blue-500 to-purple-600' },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'from-green-500 to-blue-500' },
    { id: 'executive', label: 'Análise Executiva', icon: TrendingUp, color: 'from-purple-500 to-pink-500' }
  ];

  const dataSources: DataSource[] = [
    { title: 'Banco de Dados', desc: 'Conectar com PostgreSQL/MySQL', icon: Database, status: 'connected' },
    { title: 'Arquivos CSV/Excel', desc: 'Importar planilhas de produção', icon: FileSpreadsheet, status: 'ready' },
    { title: 'API Externa', desc: 'Integração com sistemas MES', icon: Settings, status: 'pending' }
  ];

  const kpis: KPI[] = [
    { title: 'OEE Médio', value: '78.5%', change: '+5.2%', icon: Target, color: 'from-blue-500 to-cyan-400' },
    { title: 'Disponibilidade', value: '92.1%', change: '+2.1%', icon: Clock, color: 'from-green-500 to-emerald-400' },
    { title: 'Performance', value: '85.3%', change: '-1.3%', icon: Zap, color: 'from-yellow-500 to-orange-400' },
    { title: 'Qualidade', value: '94.7%', change: '+3.8%', icon: CheckCircle, color: 'from-purple-500 to-pink-400' }
  ];

  const statusItems: StatusItem[] = [
    { status: 'Concluídas', count: 23, percentage: 45, color: 'bg-green-500' },
    { status: 'Em Andamento', count: 12, percentage: 25, color: 'bg-blue-500' },
    { status: 'Planejadas', count: 8, percentage: 20, color: 'bg-yellow-500' },
    { status: 'Atrasadas', count: 5, percentage: 10, color: 'bg-red-500' }
  ];

  const insights: Insight[] = [
    { 
      title: 'Oportunidade de Melhoria', 
      description: 'OPs com OEE < 75% representam 30% da produção', 
      action: 'Analisar Causas',
      icon: Target,
      color: 'text-yellow-400'
    },
    { 
      title: 'Performance Crítica', 
      description: 'OP-004 apresenta baixa performance por 3 dias consecutivos', 
      action: 'Investigar Urgente',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    { 
      title: 'Destaque do Período', 
      description: 'OP-001 superou meta de qualidade em 5%', 
      action: 'Replicar Processo',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const getStatusColorClass = (status: string): string => {
    switch (status) {
      case 'Concluída':
        return 'bg-green-500/20 text-green-400';
      case 'Em Andamento':
        return 'bg-blue-500/20 text-blue-400';
      case 'Atrasada':
        return 'bg-red-500/20 text-red-400';
      case 'Planejada':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSourceStatusColor = (status: string): string => {
    switch (status) {
      case 'connected':
        return 'bg-green-500/20 text-green-400';
      case 'ready':
        return 'bg-blue-500/20 text-blue-400';
      case 'pending':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSourceStatusDot = (status: string): string => {
    switch (status) {
      case 'connected':
        return 'bg-green-400';
      case 'ready':
        return 'bg-blue-400';
      case 'pending':
        return 'bg-orange-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getOEEBarColor = (oee: number): string => {
    if (oee > 80) return 'bg-green-400';
    if (oee > 60) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  const DataEntryTab: React.FC = () => (
    <div className={`space-y-6 ${styles['animate-fadeIn']}`}>
      {/* Header da aba */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Entrada de Dados</h2>
            <p className="text-gray-300">Conecte-se às fontes de dados e gerencie informações de produção</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Upload size={16} />
              Importar
            </button>
            <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Database size={16} />
              Conectar BD
            </button>
          </div>
        </div>
      </div>

      {/* Cards de conexão */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dataSources.map((source, index) => {
          const IconComponent = source.icon;
          return (
            <div key={source.title} 
                 className={`group bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer ${styles['hover-scale-105']}`}
                 style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${getSourceStatusColor(source.status)}`}>
                  <IconComponent size={24} />
                </div>
                <div className={`w-3 h-3 rounded-full ${getSourceStatusDot(source.status)} animate-pulse`}></div>
              </div>
              <h3 className="text-white font-semibold mb-2">{source.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{source.desc}</p>
              <button 
                className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => {
                  if (source.title === 'Arquivos CSV/Excel') {
                    setCurrentScreen('csv-excel');
                  }
                }}
              >
                {source.status === 'connected' ? 'Configurar' : 'Conectar'}
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Tabela de dados */}
      <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Dados de Produção</h3>
            <div className="flex gap-3">
              <button className="bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 p-2 rounded-lg transition-colors">
                <Search size={16} />
              </button>
              <button className="bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 p-2 rounded-lg transition-colors">
                <Filter size={16} />
              </button>
              <button className="bg-green-500/20 hover:bg-green-500/30 text-green-300 p-2 rounded-lg transition-colors">
                <RefreshCw size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/30">
              <tr>
                <th className="text-left p-4 text-gray-300 font-medium">OP</th>
                <th className="text-left p-4 text-gray-300 font-medium">Produto</th>
                <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                <th className="text-left p-4 text-gray-300 font-medium">OEE (%)</th>
                <th className="text-left p-4 text-gray-300 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockOPs.map((op) => (
                <tr key={op.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white font-mono">{op.id}</td>
                  <td className="p-4 text-gray-300">{op.produto}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColorClass(op.status)}`}>
                      {op.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${getOEEBarColor(op.oee)}`}
                          style={{ width: `${op.oee}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-medium">{op.oee}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 p-1 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-400 hover:text-green-300 p-1 transition-colors">
                        <Edit3 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const DashboardTab: React.FC = () => (
    <div className={`space-y-6 ${styles['animate-fadeIn']}`}>
      {/* Header da aba */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Dashboard Interativo</h2>
            <p className="text-gray-300">Visualize métricas em tempo real e análises avançadas</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Calendar size={16} />
              Período
            </button>
            <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Download size={16} />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* KPIs principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const IconComponent = kpi.icon;
          return (
            <div key={kpi.title} 
                 className={`group bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 ${styles['hover-scale-105']}`}
                 style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${kpi.color} bg-opacity-20`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <span className={`text-sm font-medium ${kpi.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {kpi.change}
                </span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{kpi.title}</h3>
              <p className="text-2xl font-bold text-white">{kpi.value}</p>
            </div>
          );
        })}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de OEE */}
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Evolução OEE</h3>
            <div className="flex gap-2">
              <button className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg">7D</button>
              <button className="text-xs bg-gray-700/50 text-gray-400 px-3 py-1 rounded-lg">30D</button>
              <button className="text-xs bg-gray-700/50 text-gray-400 px-3 py-1 rounded-lg">90D</button>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-t from-blue-500/5 to-transparent rounded-lg flex items-end justify-between p-4">
            {[65, 72, 68, 78, 82, 75, 85, 88, 92, 87, 90, 85].map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-4 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t transition-all duration-1000 hover:from-blue-400 hover:to-cyan-300"
                  style={{ height: `${(value / 100) * 200}px`, animationDelay: `${index * 100}ms` }}
                ></div>
                <span className="text-xs text-gray-400">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Distribuição por Status */}
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-6">Status das OPs</h3>
          <div className="space-y-4">
            {statusItems.map((item, index) => (
              <div key={item.status} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">{item.status}</span>
                  <span className="text-white font-semibold">{item.count}</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-1000`}
                    style={{ width: `${item.percentage}%`, animationDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ExecutiveTab: React.FC = () => (
    <div className={`space-y-6 ${styles['animate-fadeIn']}`}>
      {/* Header da aba */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Análise Executiva</h2>
            <p className="text-gray-300">Insights estratégicos e análise detalhada por Ordem de Produção</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Factory size={16} />
              Filtrar
            </button>
            <button className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <TrendingUp size={16} />
              Relatório
            </button>
          </div>
        </div>
      </div>

      {/* Cards de OPs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockOPs.map((op, index) => {
          const metrics: Metric[] = [
            { label: 'OEE Geral', value: op.oee, color: 'from-purple-500 to-pink-400' },
            { label: 'Disponibilidade', value: op.disponibilidade, color: 'from-green-500 to-emerald-400' },
            { label: 'Performance', value: op.performance, color: 'from-blue-500 to-cyan-400' },
            { label: 'Qualidade', value: op.qualidade, color: 'from-yellow-500 to-orange-400' }
          ];

          return (
            <div key={op.id} 
                 className={`group bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer ${styles['hover-scale-102']}`}
                 style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Header do Card */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{op.id}</h3>
                  <p className="text-gray-400">{op.produto}</p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColorClass(op.status)}`}>
                  {op.status}
                </div>
              </div>

              {/* Métricas OEE */}
              <div className="space-y-4 mb-6">
                {metrics.map((metric, metricIndex) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{metric.label}</span>
                      <span className="text-white font-semibold">{metric.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-1000`}
                        style={{ 
                          width: `${metric.value}%`, 
                          animationDelay: `${(index * 150) + (metricIndex * 100)}ms` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-blue-400" />
                    <span className="text-sm text-gray-400">Live</span>
                  </div>
                  {op.status === 'Atrasada' && (
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={16} className="text-red-400" />
                      <span className="text-sm text-red-400">Alerta</span>
                    </div>
                  )}
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                  <span className="text-sm">Detalhes</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Insights Executivos */}
      <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="text-purple-400" />
          Insights Executivos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div key={insight.title} 
                   className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                   style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`${insight.color} mb-3`}>
                  <IconComponent size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">{insight.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{insight.description}</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  {insight.action} →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Nova tela para Arquivos CSV/Excel
  const CSVExcelScreen: React.FC = () => (
    <div className={`space-y-6 ${styles['animate-fadeIn']}`}>
      {/* Header da tela */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentScreen('main')}
              className="p-2 bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 rounded-lg transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Arquivos CSV/Excel</h2>
              <p className="text-gray-300">Importe e gerencie planilhas de produção</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Upload size={16} />
              Importar Arquivo
            </button>
            <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2">
              <Download size={16} />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Área de Upload */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload de Arquivos */}
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <FileSpreadsheet className="text-blue-400" />
            Importar Arquivo
          </h3>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
            <FileSpreadsheet size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300 mb-2">Arraste e solte arquivos CSV ou Excel aqui</p>
            <p className="text-gray-500 text-sm mb-4">ou clique para selecionar</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
              Selecionar Arquivo
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>Formatos suportados: .csv, .xlsx, .xls</p>
            <p>Tamanho máximo: 10MB</p>
          </div>
        </div>

        {/* Configurações de Importação */}
        <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Settings className="text-purple-400" />
            Configurações
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Separador de Colunas
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option value=",">Vírgula (,)</option>
                <option value=";">Ponto e vírgula (;)</option>
                <option value="\t">Tabulação</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Codificação
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option value="utf-8">UTF-8</option>
                <option value="latin1">Latin-1</option>
                <option value="cp1252">Windows-1252</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm">
                <input type="checkbox" className="rounded bg-gray-700/50 border-gray-600" />
                Primeira linha como cabeçalho
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Arquivos Importados */}
      <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-semibold text-white">Arquivos Importados</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/30">
              <tr>
                <th className="text-left p-4 text-gray-300 font-medium">Nome do Arquivo</th>
                <th className="text-left p-4 text-gray-300 font-medium">Tamanho</th>
                <th className="text-left p-4 text-gray-300 font-medium">Data Importação</th>
                <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                <th className="text-left p-4 text-gray-300 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 text-white">producao_janeiro.csv</td>
                <td className="p-4 text-gray-300">2.3 MB</td>
                <td className="p-4 text-gray-300">15/01/2024</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    Processado
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="text-blue-400 hover:text-blue-300 p-1 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="text-green-400 hover:text-green-300 p-1 transition-colors">
                      <Download size={16} />
                    </button>
                    <button className="text-red-400 hover:text-red-300 p-1 transition-colors">
                      <Edit3 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 text-white">oee_fevereiro.xlsx</td>
                <td className="p-4 text-gray-300">1.8 MB</td>
                <td className="p-4 text-gray-300">10/02/2024</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                    Processando
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="text-blue-400 hover:text-blue-300 p-1 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-400 p-1 cursor-not-allowed">
                      <Download size={16} />
                    </button>
                    <button className="text-red-400 hover:text-red-300 p-1 transition-colors">
                      <Edit3 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Principal */}
        <div className={`mb-8 p-6 ${styles['production-header']}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl">
              <BarChart3 className="text-blue-400" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Analisador de Produção</h1>
              <p className="text-gray-400">Análise completa de OEE, performance e qualidade industrial</p>
            </div>
          </div>
          
          {/* Navegação por Abas */}
          <div className="flex gap-2 bg-gray-800/30 backdrop-blur-lg rounded-xl p-2 border border-white/10">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 flex-1 justify-center ${styles['production-tab']} ${
                    activeTab === tab.id
                      ? `${styles['active']} bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Conteúdo das Abas */}
        <div className="transition-all duration-500">
          {currentScreen === 'main' && (
            <>
              {activeTab === 'data' && <DataEntryTab />}
              {activeTab === 'dashboard' && <DashboardTab />}
              {activeTab === 'executive' && <ExecutiveTab />}
            </>
          )}
          {currentScreen === 'csv-excel' && <CSVExcelScreen />}
        </div>
      </div>
    </div>
  );
};