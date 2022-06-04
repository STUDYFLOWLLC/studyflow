import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorOrderByWithAggregationInput } from "../../../inputs/ProfessorOrderByWithAggregationInput";
import { ProfessorScalarWhereWithAggregatesInput } from "../../../inputs/ProfessorScalarWhereWithAggregatesInput";
import { ProfessorWhereInput } from "../../../inputs/ProfessorWhereInput";
import { ProfessorScalarFieldEnum } from "../../../../enums/ProfessorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  where?: ProfessorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfessorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProfessorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"ProfessorID" | "Name" | "Email">;

  @TypeGraphQL.Field(_type => ProfessorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProfessorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
