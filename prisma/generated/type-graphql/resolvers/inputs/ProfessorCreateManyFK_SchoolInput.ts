import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProfessorCreateManyFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorCreateManyFK_SchoolInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ProfessorID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Email?: string | undefined;
}
