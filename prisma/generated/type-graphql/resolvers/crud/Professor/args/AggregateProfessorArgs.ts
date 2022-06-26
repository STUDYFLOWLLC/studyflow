import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorOrderByWithRelationInput } from "../../../inputs/ProfessorOrderByWithRelationInput";
import { ProfessorWhereInput } from "../../../inputs/ProfessorWhereInput";
import { ProfessorWhereUniqueInput } from "../../../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProfessorArgs {
  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  where?: ProfessorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfessorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProfessorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProfessorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
