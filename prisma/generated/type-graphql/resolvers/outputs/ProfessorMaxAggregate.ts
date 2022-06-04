import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProfessorMaxAggregate", {
  isAbstract: true
})
export class ProfessorMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ProfessorID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name!: string | null;
}
