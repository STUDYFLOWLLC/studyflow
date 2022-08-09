import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogAvgAggregate } from "../outputs/BlogAvgAggregate";
import { BlogCountAggregate } from "../outputs/BlogCountAggregate";
import { BlogMaxAggregate } from "../outputs/BlogMaxAggregate";
import { BlogMinAggregate } from "../outputs/BlogMinAggregate";
import { BlogSumAggregate } from "../outputs/BlogSumAggregate";

@TypeGraphQL.ObjectType("BlogGroupBy", {
  isAbstract: true
})
export class BlogGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  BlogID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Body!: string;

  @TypeGraphQL.Field(_type => BlogCountAggregate, {
    nullable: true
  })
  _count!: BlogCountAggregate | null;

  @TypeGraphQL.Field(_type => BlogAvgAggregate, {
    nullable: true
  })
  _avg!: BlogAvgAggregate | null;

  @TypeGraphQL.Field(_type => BlogSumAggregate, {
    nullable: true
  })
  _sum!: BlogSumAggregate | null;

  @TypeGraphQL.Field(_type => BlogMinAggregate, {
    nullable: true
  })
  _min!: BlogMinAggregate | null;

  @TypeGraphQL.Field(_type => BlogMaxAggregate, {
    nullable: true
  })
  _max!: BlogMaxAggregate | null;
}
