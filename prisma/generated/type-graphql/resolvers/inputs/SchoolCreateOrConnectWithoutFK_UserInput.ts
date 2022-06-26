import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutFK_UserInput } from "../inputs/SchoolCreateWithoutFK_UserInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class SchoolCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutFK_UserInput;
}
