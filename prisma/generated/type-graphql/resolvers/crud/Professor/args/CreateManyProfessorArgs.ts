import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorCreateManyInput } from "../../../inputs/ProfessorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProfessorArgs {
  @TypeGraphQL.Field(_type => [ProfessorCreateManyInput], {
    nullable: false
  })
  data!: ProfessorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
