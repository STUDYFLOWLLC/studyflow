import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutFK_ProfessorInput } from "../inputs/SchoolCreateOrConnectWithoutFK_ProfessorInput";
import { SchoolCreateWithoutFK_ProfessorInput } from "../inputs/SchoolCreateWithoutFK_ProfessorInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateNestedOneWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class SchoolCreateNestedOneWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_ProfessorInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutFK_ProfessorInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolWhereUniqueInput | undefined;
}
