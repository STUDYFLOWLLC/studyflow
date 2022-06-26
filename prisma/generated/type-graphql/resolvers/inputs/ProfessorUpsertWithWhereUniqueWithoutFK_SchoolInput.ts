import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateWithoutFK_SchoolInput } from "../inputs/ProfessorCreateWithoutFK_SchoolInput";
import { ProfessorUpdateWithoutFK_SchoolInput } from "../inputs/ProfessorUpdateWithoutFK_SchoolInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorUpsertWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => ProfessorWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  update!: ProfessorUpdateWithoutFK_SchoolInput;

  @TypeGraphQL.Field(_type => ProfessorCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: ProfessorCreateWithoutFK_SchoolInput;
}
