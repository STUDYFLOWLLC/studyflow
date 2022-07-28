import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupScalarWhereInput } from "../inputs/StudyGroupScalarWhereInput";
import { StudyGroupUpdateManyMutationInput } from "../inputs/StudyGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("StudyGroupUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class StudyGroupUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => StudyGroupScalarWhereInput, {
    nullable: false
  })
  where!: StudyGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => StudyGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudyGroupUpdateManyMutationInput;
}
