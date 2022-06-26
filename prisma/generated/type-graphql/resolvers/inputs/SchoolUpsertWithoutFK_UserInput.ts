import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutFK_UserInput } from "../inputs/SchoolCreateWithoutFK_UserInput";
import { SchoolUpdateWithoutFK_UserInput } from "../inputs/SchoolUpdateWithoutFK_UserInput";

@TypeGraphQL.InputType("SchoolUpsertWithoutFK_UserInput", {
  isAbstract: true
})
export class SchoolUpsertWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SchoolUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: SchoolUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutFK_UserInput;
}
