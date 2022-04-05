import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { Visibility } from "../enums/Visibility";

@TypeGraphQL.ObjectType("Flow", {
  isAbstract: true
})
export class Flow {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  CreatedByUser?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CreatedById?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;
}
